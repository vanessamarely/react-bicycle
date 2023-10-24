const Card = ({ title, img, status }) => (
  <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div>
      <img className="p-8 rounded-t-lg" src={img} alt={title} />
    </div>
    <div className="card-body">
      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">
        {title}
      </h5>
      <p className="mt-2 text-gray-600 dark:text-gray-400 text-center">Status: {status}</p>
    </div>
  </div>
);

export default Card;
