import React from "react";

const CreateProposalForm = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-xl p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Create a new proposal
        </h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Title
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="title"
                id="title"
                className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-2 rounded-md py-2 px-3 placeholder-gray-400 placeholder-opacity-100 focus:outline-none focus:placeholder-gray-600"
                placeholder="Enter title here..."
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Description
            </label>
            <div className="mt-1">
              <textarea
                id="description"
                name="description"
                rows={5}
                className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-2 rounded-md py-2 px-3 placeholder-gray-400 placeholder-opacity-100 focus:outline-none focus:placeholder-gray-600"
                placeholder="Enter description here..."
              ></textarea>
            </div>
          </div>
          <div>
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Amount
            </label>
            <div className="mt-1">
              <input
                type="number"
                name="amount"
                id="amount"
                className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-2 rounded-md py-2 px-3 placeholder-gray-400 placeholder-opacity-100 focus:outline-none focus:placeholder-gray-600"
                placeholder="Enter amount in Cvm here..."
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-primaryPurple to-lightPurple hover:from-lightPurple hover:to-primaryPurple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create proposal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProposalForm;
