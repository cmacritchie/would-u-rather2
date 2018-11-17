import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


const LeaderBoard = ({users, user}) => {
    
    if(!user.hasOwnProperty('id'))
        {
            return <Redirect to='/404' />
        }
    
    const calcUserScore = users.map(user =>{ 
        
        const answered = Object.keys(user.answers).length;
        const created = Object.keys(user.questions).length;

        console.log(user.answers)
        return{
            id:user.id,
            name: user.name,
            answered,
            created,
            total: (answered + created),
            avatar: user.avatarURL
         }
    });
    const sortedScore = calcUserScore.sort((a,b) => {
        return b.total - a.total;
    });
    console.log("sorted");
    console.log(sortedScore);

    return(
        <div>
            <h4>Leaderboard Standings</h4>
            <ul className="list-group">
                {calcUserScore.map((user, index) =>{
                    return(
                        <li
                        className="list-group-item order"
                        key={user.id}
                        >
                            <div className="container">
                                <div className="superpic">
                                    <img src={user.avatar} className="thumbnailLarge" />
                                    <br />
                                    <h5>{user.name}</h5>
                                </div>
                                <div className="superList">
                                    <p>{user.name}</p> 
                                    <p>Number of Questions Answered: {user.answered}</p>
                                    <p>Number of Questions Created: {user.created}</p>
                                    <br/>
                                    <h6>Total Score: {user.total}</h6>
                                </div>
                                <div className="rank">
                                <h1><i className="glyphicon glyphicon-tower"></i></h1>
                                </div>
                            </div>
                            
                        </li>
                        
                    )
                })}
            </ul>
        </div>
    )
}



function mapStateToProps(state) {
    return {
        users:state.users,
        user: state.activeUser
    }
}

export default connect(mapStateToProps)(LeaderBoard)