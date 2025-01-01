"use client"

const ErrorPage = ({ error, reset }) => {
    return (
        <div>
            <p className='text-center text-red-500 my-12'>
                Something went wrong
            </p>
            {error?.message}
            <button onClick={() => reset()}>Try again</button>
        </div>
    );
};

export default ErrorPage;