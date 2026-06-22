export default function ImageModal({ image, onClose }) {
  if (!image) return null;

  return (
    <div
      className="
      fixed
      inset-0
      bg-black/90
      flex
      items-center
      justify-center
      p-6
      "
      style={{ zIndex: 9999 }}
      onClick={onClose}
    >
      <img
        src={image}
        alt=""
        onClick={(e) => e.stopPropagation()}
        className="
        max-w-[90vw]
        max-h-[90vh]
        rounded-3xl
        shadow-2xl
        "
      />

      <button
        onClick={onClose}
        className="
        absolute
        top-6
        right-6
        text-white
        text-4xl
        "
      >
        ✕
      </button>
    </div>
  );
}
