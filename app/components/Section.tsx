import AnimateElement from "@/compoents/AnimateElement";
import { HTMLAttributes } from "react";

function getAnimationProps(i: number) {
  return { animateOnce: false, animation: { opacity: [0, 1], transition: { duration: 4, delay: 4 * i } } }
}

export default function Section({
  children,
  backgroundClassName,
  title,
  subtitle,
  description,
  className,
  ...rest
}: {
  children?: React.ReactNode,
  backgroundClassName?: string,
  title?: string,
  description?: string,
  subtitle?: string
} & HTMLAttributes<HTMLElement>) {
  const hasText = title || description || subtitle
  return (
    <section {...rest} className={`${backgroundClassName} p-12 `}>
      <div className={` max-app-width mx-auto  h-full `}>
        <div className={`flex flex-col  ${hasText ? 'gap-12' : ''}`}>
          <div className="flex gap-4 flex-col text-center text-white">
            
            <AnimateElement {...getAnimationProps(1)} className='text-xs uppercase'>{title}</AnimateElement>
            <AnimateElement {...getAnimationProps(2)} className='text-xl font-bold'>{subtitle}</AnimateElement>
            <AnimateElement {...getAnimationProps(3)} className='text-neutral-400'>{description}</AnimateElement>
          </div>
          <div className={className}>
            {children}

          </div>
        </div>
      </div>
    </section>
  );
}