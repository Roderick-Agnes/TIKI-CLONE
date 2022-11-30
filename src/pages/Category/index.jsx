import {useEffect} from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

const Category = () => {
    const { id } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    useEffect(() => {
        setSearchParams({ hello: "world"  });
        console.log(searchParams.values);
    }, [])
    return (
        <div>
            category
        </div>
    );
}

export default Category;
