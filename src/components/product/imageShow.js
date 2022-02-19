const ImageShow = ({image, onCloseImage}) => {
    return ( 
        <div onClick={onCloseImage} className="
            fixed 
            top-0 
            left-0 
            right-0 
            bottom-0 
            flex 
            justify-center 
            items-center 
            bg-modalColor 
            z-10">
            <img src={image} alt="ImageShow" className="w-auto h-4/5 rounded-2xl" />
        </div>
     );
}
 
export default ImageShow;