import type { MediaItem } from '@/data/projects';
import LazyVideo from './LazyVideo';

export default function Media({ item, className = '' }: { item: MediaItem; className?: string }) {
  if (!item.src) return <div className={`ph ${className}`} aria-hidden />;
  if (item.type === 'video')
    return <LazyVideo className={className} src={item.src} poster={item.poster} />;
  // eslint-disable-next-line @next/next/no-img-element
  return <img className={className} src={item.src} alt="" loading="lazy" />;
}
