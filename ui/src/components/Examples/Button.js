function Button({ primary }) {
  return (
    <>
      <button
        type="button"
        className={`py-2 px-4 border rounded-md focus:outline-none ${
          primary ? 'bg-purple-600 text-white' : ''
        }`}
      >
        Click me
      </button>
    </>
  );
}

export default Button;
