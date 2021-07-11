import React,{useState} from "react"
import Pagination from '@material-ui/lab/Pagination';
import axios from "axios"
import { setRecentGames } from "../../Redux/actions/game"
import { useSelector,useDispatch } from "react-redux";
const Paginator = ({setskeleton})=>{

	const gamedata = useSelector(state => state.games)
	const dispatch=useDispatch()
	const [pagno, setpageno] = useState(gamedata.current_page)
	
	const handlePageChange = async (event, value) => {
		setskeleton(true)
		setpageno(value)
		const result = await axios.get(`/api/games?page=${value}`)
		dispatch(setRecentGames(result.data))
		setskeleton(false)
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