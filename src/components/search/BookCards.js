const BookCards = ({bookCards}) => {


    return (
        bookCards.map((item, index) => {
            return (
                <div>
                    {item.volumeInfo.title}
                </div>
            )
        })
    )
}

export default BookCards