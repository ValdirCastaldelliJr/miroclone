"use client";

interface BoardListProps {
    orgId: string;
    query: {
        search?: string;
        favorites?: string;
    }
};


export const BoardList = ({
    orgId,
    query,
}: BoardListProps) =>{

    const data = []; // TODO: Change to API call

    if (!data?.length && query.search) {
        return (
            <div className="flex flex-col items-center justify-center">
                No Boards Found
            </div>
        );
    }

    if (!data?.length && query.favorites) {
        return (
            <div className="flex flex-col items-center justify-center">
                No Favorites Boards Found
            </div>
        );
    }

    if (!data?.length) {
        return (
            <div className="flex flex-col items-center justify-center">
                No Boards at all
            </div>
        );
    }

    return (
        <div>
            {JSON.stringify(query)}
        </div>
    );
};