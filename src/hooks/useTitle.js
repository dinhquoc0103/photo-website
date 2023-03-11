import { useEffect } from "react";

function useTitle(title) {

    useEffect(() => {
        document.title = `${title} | Q Photos`;
    }, [title]);

    return undefined;
}

export default useTitle;