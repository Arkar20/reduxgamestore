import React,{useState,useEffect} from 'react'
import style from '../../style/style'
import SearchIcon from '@material-ui/icons/Search';
import {ListItemAvatar} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import {Link} from "react-router-dom"
import useAutocomplete from '@material-ui/lab/useAutocomplete';
import axios from "axios";
import { setSearchList } from "../../Redux/actions/game"
import { useSelector, useDispatch } from "react-redux"


import {
    InputBase,
    List,
    ListItem,
    ListItemText,
} from '@material-ui/core'
const SearchList = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [searchkeyword, setSearchKeyword] = useState("")
    const [filtereddata, setFilteredData] = useState(null)

  const searchlist = useSelector(state => state.searchlist)
 
  const dispatch = useDispatch()
  
     const handleClose = () => {
    setAnchorEl(null);
  };

 
    
    const classes = style();

  const fetchsearch = async () => {
   if(!searchlist)
   {
     const result = await axios.get('/api/searchlists')
    dispatch(setSearchList(result.data))
   }

   
  }

  const {
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: 'use-autocomplete-demo',
    options: searchlist?searchlist:[],
    getOptionLabel: (option) => option.title,
  });
    return (
         <div className={classes.tabcontainer}>
                             <div className={classes.search}>
                            <div className={classes.searchIcon}>
                            <SearchIcon color="secondary"/>
          </div>
                 <InputBase
                        onClick={()=>fetchsearch()}
                        placeholder="Search..."
                        classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                   
                           {...getInputProps()}
                            inputProps={{ 'aria-label': 'search' }}
                      />
                         
                        </div>
                 
         {groupedOptions.length > 0 ? (
        <List className={classes.searchcontainer} {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <ListItem {...getOptionProps({ option, index })} component={Link} to={`/game/${option.slug}`}>
              <ListItemAvatar>
                                        <Avatar alt={option.slug} src={`/${option.img1}`} />
                                           
                      
                                        </ListItemAvatar>
                                        <ListItemText primary={option.title}  />
            </ListItem>
          ))}
        </List>
      ) : null}
               
                   
                    </div>
    )
}
export default SearchList;