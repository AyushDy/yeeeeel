

    body{
        width: 100vw;
        display: flex;
        align-items: center;
        flex-direction: column;
        margin: 0;
    }
    .container{
        display: flex;
        flex-direction: column;
    }

    #pageNo-List{
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 70vw;
        /* border: 1px solid; */
    }

    ul{
        width: 85vw;
        height: auto;
        display: flex;
        flex-direction: column;
        list-style-type: none;
        /* border: 1px solid; */
    }
    
    .page-box,.box{
        width: 30px;
        height: 30px;
        box-shadow: 0 0 3px gray;
        margin: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border-radius: 5px;
    }



    li{
        box-shadow: 0 0 3px gray;
        border-radius: 6px;
        margin: 4px;
        color: rgb(0, 0, 0);
        padding: 3px;
        background-color:  rgb(255, 190, 221);
    }

    .active{
        background-color: rgb(255, 47, 148);
        color: white;
    }

    .box:hover,.page-box:hover{
        background-color:rgb(255, 176, 214) ;
        box-shadow: 0 0 6px rgb(255, 198, 238);
    }

    .inactive{
        background-color: rgb(199, 199, 199);
        color: white;
    }

    .list >.inactive:hover{
        background-color: rgb(199, 199, 199);
        color: white;
        box-shadow: 0 0 3px gray;
        cursor: default;
    }


    .first:hover{
        background-color:rgb(255, 176, 214) ;
        
        box-shadow: 0 0 6px rgb(197, 197, 197);
    }

    select {
    padding: 3px;
    box-shadow: 0 0 2px rgb(158, 158, 158);
    border: none;
    border-radius: 5px;
    background-color: #fff;
    color: #333;
    cursor: pointer;
}

select option:checked {
    background-color: #ff9dd1; 
    color: #ffffff; 

}

select::-webkit-scrollbar{
    width: 15px;
}

select::-webkit-scrollbar-thumb {
    background-color: rgb(255, 14, 147);
    border-radius: 5px;
}

select::-webkit-scrollbar-track {
    background-color: #ffffff;
}

