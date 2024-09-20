import Spline from '@splinetool/react-spline';

export function Particles() {
  return (
    <div className="absolute w-full top-[-1px] h-[100vh] opacity-0 animate-fadeIn">
      <Spline scene="https://prod.spline.design/fRlm-ykzk-igvtoj/scene.splinecode" />
    </div>
  );
}
