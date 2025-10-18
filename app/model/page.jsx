'use client';
import ModelViewer from './ModelViewer.jsx';
import Carousel from './Carousel.jsx';

const images = [
  {
    src: '/img1.png',
    alt: 'Image 1',
    title: 'EVENT 1',
    description: 'This is a short description for Event 1.',
  },
  {
    src: '/img1.png',
    alt: 'Image 2',
    title: 'EVENT 2',
    description: 'This is a short description for Event 2.',
  },
  {
    src: '/img1.png',
    alt: 'Image 3',
    title: 'EVENT 3',
    description: 'This is a short description for Event 3.',
  },
  {
    src: '/img1.png',
    alt: 'Image 4',
    title: 'EVENT 4',
    description: 'This is a short description for Event 4.',
  },
  {
    src: '/img1.png',
    alt: 'Image 1',
    title: 'EVENT 1',
    description: 'This is a short description for Event 1.',
  },
  {
    src: '/img1.png',
    alt: 'Image 2',
    title: 'EVENT 2',
    description: 'This is a short description for Event 2.',
  },
  {
    src: '/img1.png',
    alt: 'Image 3',
    title: 'EVENT 3',
    description: 'This is a short description for Event 3.',
  },
  {
    src: '/img1.png',
    alt: 'Image 4',
    title: 'EVENT 4',
    description: 'This is a short description for Event 4.',
  },
  {
    src: '/img1.png',
    alt: 'Image 1',
    title: 'EVENT 1',
    description: 'This is a short description for Event 1.',
  },
  {
    src: '/img1.png',
    alt: 'Image 2',
    title: 'EVENT 2',
    description: 'This is a short description for Event 2.',
  },
  {
    src: '/img1.png',
    alt: 'Image 3',
    title: 'EVENT 3',
    description: 'This is a short description for Event 3.',
  },
  {
    src: '/img1.png',
    alt: 'Image 4',
    title: 'EVENT 4',
    description: 'This is a short description for Event 4.',
  },
];

export default function Page() {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <ModelViewer url="/ani.glb" autoRotate={true} />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 20,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Carousel images={images} loop autoplay showPagination showNavigation />
      </div>
    </div>
  );
}
