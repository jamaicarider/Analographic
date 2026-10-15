import type { MediaItem } from '@/data/projects';

export default function Media({ item, className = '' }: { item: MediaItem; className?: string }) {
  if (!item.src) return <div className={`ph ${className}`} aria-hidden />;
  if (item.type === 'video')
    return <video className={className} src={item.src} poster={item.poster} muted loop playsInline autoPlay preload="metadata" />;
  // eslint-disable-next-line @next/next/no-img-element
  return <img className={className} src={item.src} alt="" loading="lazy" />;
}
