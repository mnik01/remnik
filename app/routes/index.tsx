import { Link } from "remix";

export const links = () => [
  {
    rel: 'preload',
    href: '/assets/beams.jpg',
    as: 'iamge',
    type: 'image/jpeg',
  },
  {
    rel: 'preload',
    href: '/assets/grid.svg',
    as: 'iamge',
    type: 'image/svg+xml',
  }
];


const Index = ()  => (
  <div className="index-screen">
    <img src="/assets/beams.jpg" alt="" className="index-screen__img" width="1308" />
    <div className="index-screen__grid"></div>
    <div className="index-screen__card">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold">
          MNIK01 BLOG
        </h1>
        <div className="pt-4 underline">
          <Link to="/posts">Go to post list</Link>
        </div>
      </div>
    </div>
  </div>
)
export default Index;
