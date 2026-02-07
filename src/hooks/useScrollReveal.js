import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-triggered animations using Intersection Observer
 * Follows FAANG design standards: calm, intentional, one-time reveals
 * 
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Viewport visibility threshold (0-1), default 0.3
 * @param {number} options.delay - Animation delay in ms, default 0
 * @param {boolean} options.once - Trigger animation only once, default true
 * @returns {Object} - { ref, isVisible }
 */
const useScrollReveal = (options = {}) => {
    const {
        threshold = 0.3,
        delay = 0,
        once = true
    } = options;

    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        // Skip if already animated and once is true
        if (once && hasAnimated.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Apply delay if specified
                    if (delay > 0) {
                        setTimeout(() => {
                            setIsVisible(true);
                            hasAnimated.current = true;
                        }, delay);
                    } else {
                        setIsVisible(true);
                        hasAnimated.current = true;
                    }

                    // Unobserve if once is true
                    if (once) {
                        observer.unobserve(element);
                    }
                } else if (!once) {
                    // Allow re-animation if once is false
                    setIsVisible(false);
                }
            },
            {
                threshold,
                rootMargin: '0px'
            }
        );

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [threshold, delay, once]);

    return { ref, isVisible };
};

export default useScrollReveal;
