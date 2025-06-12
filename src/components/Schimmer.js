export const Schimmer = () =>{
    return (
        <div className="m-4 w-64 rounded-2xl h-80 p-4 bg-white shadow-lg animate-pulse">
              <div className="w-full h-50 mb-2 bg-gray-200 rounded-xl "></div>
              <h3 className="h-6 bg-gray-200 rounded w-3/4 mb-2"></h3>
              <h4 className="h-5 bg-gray-200 rounded w-1/2 mb-2"></h4>
              <div className="flex justify-between items-center mt-2">
                <h5 className="h-4 bg-gray-200 rounded w-1/4"></h5>
                <h5 className="h-4 bg-gray-200 rounded w-1/6"></h5>
              </div>
        </div>
    )
}

export const schimmercard = [1,2,3,4,5,6,7,8,9,10,11,12];

export const SchimmerMenu = () => {
    return(
        <div className="schimmerMenuContainer"> 
            <div className="schimmerMenu">
                <div className="nameschimmermenu"></div>
                <div className="rateschimmermenu"></div>
                <div className="starschimmermenu"></div>
            </div>
            <div className="schimmerMenuImage"></div>
        </div>

    )
}

export const schimmerMenuCard = [1,2,3,4];