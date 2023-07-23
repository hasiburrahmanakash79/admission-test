import UseTitle from "../../../Hook/UseTitle";

const PhotoGallery = () => {
  return (
    <div className="px-5 my-7">
        <UseTitle title="Graduate Photos"></UseTitle>
      <div className="grid lg:grid-cols-6 md:grid-cols-4 gap-3">
        <div className="avatar">
          <div className="w-full rounded">
            <img src="https://35photo.pro/photos_main/1826/9134697.jpg" />
          </div>
        </div>
        <div className="avatar">
          <div className="w-full rounded">
            <img src="https://www.canon.com.au/-/media/images/stories/best-community-images-2018/image-4-colorfulskies-1000.ashx?la=en" />
          </div>
        </div>
        <div className="avatar">
          <div className="w-full rounded">
            <img src="https://i.ibb.co/ftQ1HHd/image.png" />
          </div>
        </div>
        <div className="avatar">
          <div className="w-full rounded">
            <img src="https://www.mordeo.org/files/uploads/2018/11/Photographer-Camera-Self-Photography-4K-Ultra-HD-Mobile-Wallpaper-950x1689.jpg" />
          </div>
        </div>
        <div className="avatar">
          <div className="w-full rounded">
            <img src="https://cdn.pixabay.com/photo/2016/01/09/18/27/camera-1130731_1280.jpg" />
          </div>
        </div>
        <div className="avatar">
          <div className="w-full rounded">
            <img src="https://cdn.pixabay.com/photo/2015/09/03/08/04/photographer-920128_1280.jpg" />
          </div>
        </div>
        <div className="avatar">
          <div className="w-full rounded">
            <img src="https://cdn.pixabay.com/photo/2013/03/02/02/41/alley-89197_1280.jpg" />
          </div>
        </div>
        <div className="avatar">
          <div className="w-full rounded">
            <img src="https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg" />
          </div>
        </div>
        <div className="avatar">
          <div className="w-full rounded">
            <img src="https://wallpapers.com/images/high/view-background-8d39qmnfvuzxa0lp.webp" />
          </div>
        </div>
        <div className="avatar">
          <div className="w-full rounded">
            <img src="https://www.milwaukeemag.com/wp-content/uploads/2022/05/0522-414-CC-Swans-Li-e1652969275504-1024x722-1.jpeg" />
          </div>
        </div>
        <div className="avatar">
          <div className="w-full rounded">
            <img src="https://c4.wallpaperflare.com/wallpaper/816/62/518/digital-art-nature-trees-mountains-wallpaper-thumb.jpg" />
          </div>
        </div>
        <div className="avatar">
          <div className="w-full rounded">
            <img src="https://images.pexels.com/photos/4651722/pexels-photo-4651722.jpeg?auto=compress&cs=tinysrgb&w=1600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
