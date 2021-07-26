import React,{useState} from "react"
import { useDispatch, useSelector } from "react-redux";

import Pagination from '@material-ui/lab/Pagination';
import { setPagenation } from "../../Redux/actions/game"
import { useHistory } from "react-router-dom";

const Paginator = ({setskeleton})=>{
    let history = useHistory();

	const gamedata = useSelector(state => state.games)
	const dispatch=useDispatch()
	const [pagno, setpageno] = useState(gamedata.current_page)
	
	const handlePageChange = async (event, value) => {
		setskeleton(true)
		setpageno(value)
		dispatch(setPagenation(value))
		setskeleton(false)
		  history.push({
           pathname: '/games',
           search: '?page='+value,
        //    state: { detail: 'some_value' }
       });
	};
	
	
	return (
	<>
			<Pagination
				count={gamedata.last_page}
				color="secondary"
				page={pagno}
				onChange={handlePageChange}
				
		
	    />
	</>
		)
}
export default Paginator