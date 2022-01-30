const Favorites = ({list}) => {
    return (
        <div>
            <ul>
                {list.map(item => (
                    <li>
                        <img src={item} style={{width:"150px"}} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Favorites
