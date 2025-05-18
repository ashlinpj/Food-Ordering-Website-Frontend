const Shimmer = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[...Array(8)].map((_, index) => (
                    <div key={index} className="w-72 rounded-lg overflow-hidden shadow-lg bg-white">
                        <div className="animate-pulse">
                            {/* Image Shimmer */}
                            <div className="h-48 bg-gray-200"></div>
                            
                            {/* Content Shimmer */}
                            <div className="p-4 space-y-3">
                                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                                <div className="flex items-center space-x-2">
                                    <div className="h-4 bg-gray-200 rounded w-16"></div>
                                    <div className="h-4 bg-gray-200 rounded w-20"></div>
                                </div>
                                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Shimmer;