import React from 'react';

import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ButtonGroup from "@material-ui/core/ButtonGroup";

function Nav(){




    return(
        <nav>
            <ButtonGroup  variant="contained" color="default" aria-label="text primary button group" style={{marginBottom: "60px"}}>
                <Button><Link to={"/store"}>Store</Link></Button>
                <Button><Link to ={"/cart"}>Cart</Link></Button>
                <Button><Link to ={"/admin"}>Admin</Link></Button>
            </ButtonGroup>
        </nav>

    )
}
export default Nav;