import React,{useState} from "react"
import { useDispatch, useSelector } from "react-redux";

import Pagination from '@material-ui/lab/Pagination';
import { setPagenation } from "../../Redux/actions/game"
import { useHistory } from "react-router-dom";

const Paginator = ()=>{
    let history = useHistory();

	const gamedata = useSelector(state => state.games)
	const dispatch=useDispatch()
	const [pagno, setpageno] = useState(gamedata.data.current_page)
	const handlePageChange = async (event, value) => {
		
		dispatch(setPagenation(value))
	};
	
	
	return (
	<>
			<Pagination
				count={gamedata.data.last_page}
				color="secondary"
				page={pagno}
				onChange={handlePageChange}
				
		
	    />
	</>
		)
}
export default Paginator