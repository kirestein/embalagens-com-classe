import { Injectable, computed, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollSpyService {
  private _active = signal<string>('home');
  readonly active = computed(() => this._active());

  init(ids: string[]) {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) {
          this._active.set(visible.target.id);
        }
      },
      { threshold: [0.6], rootMargin: '0px 0px -20% 0px' }
    );

    sections.forEach((sec) => observer.observe(sec));
  }
}
