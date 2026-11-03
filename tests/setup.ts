import React from "react";
import { afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";

afterEach(() => cleanup());

Object.defineProperty(HTMLElement.prototype, "scrollBy", {
  configurable: true,
  value: vi.fn(),
});

Object.defineProperty(HTMLElement.prototype, "setPointerCapture", {
  configurable: true,
  value: vi.fn(),
});

Object.defineProperty(HTMLElement.prototype, "releasePointerCapture", {
  configurable: true,
  value: vi.fn(),
});

vi.mock("next/image", () => ({
  default: ({ fill: _fill, priority: _priority, ...props }: Record<string, unknown>) =>
    React.createElement("img", props),
}));

type MockMotionProps = Record<string, unknown> & { children?: React.ReactNode };

const motionComponent = (tag: string) => React.forwardRef<HTMLElement, MockMotionProps>(
  ({ children, initial: _initial, animate: _animate, transition: _transition, whileInView: _whileInView, viewport: _viewport, ...props }, ref) =>
    React.createElement(tag, { ...props, ref } as React.HTMLAttributes<HTMLElement>, children as React.ReactNode),
);

vi.mock("motion/react", () => ({
  motion: new Proxy({}, { get: (_target, tag: string) => motionComponent(tag) }),
  useReducedMotion: () => false,
  useMotionValue: (initial: number) => ({ get: () => initial, set: vi.fn() }),
  useSpring: (value: unknown) => value,
  useScroll: () => ({ scrollYProgress: 0 }),
  useTransform: () => 0,
}));
