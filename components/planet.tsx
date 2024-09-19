import Spline from '@splinetool/react-spline';

export function Planet() {
  return (
    <div className="absolute w-full top-[-80px] z-[-1] h-[100vh] opacity-0 animate-fadeIn">
      <Spline scene="https://prod.spline.design/qqU7lCKjSE7in9D0/scene.splinecode" />
    </div>
  );
}
