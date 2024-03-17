let intersectionObserver: IntersectionObserver;

function ensureIntersectionObserver() {
  if (intersectionObserver) return;

  intersectionObserver = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        const eventName = entry.isIntersecting ? 'enterViewport' : 'exitViewport';
        entry.target.dispatchEvent(new CustomEvent(eventName));
      });
    }
  );
}

export default function viewport(element: HTMLElement): { destroy: () => void } {
  ensureIntersectionObserver();

  intersectionObserver.observe(element);

  return {
    destroy() {
      if (intersectionObserver) {
        intersectionObserver.unobserve(element);
      }
    }
  }
}
