import Image from "next/image";

export function BackgroundEffects() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0" aria-hidden="true">
      {/* Unsplash Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1673951284213-2a3550681b7d?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Liquid Brokers Background"
        fill
        priority
        quality={100}
        sizes="100vw"
        className="object-cover object-center select-none"
      />
    </div>
  );
}
