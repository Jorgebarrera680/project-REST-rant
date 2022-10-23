function show (data) {
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  let rating = ( 
    <h3 calssName="inactive">
      not yet rated
    </h3>
  )
  if (data.place.comments.length) {
    let sumRtings = data.places.comments.reduce((tot, c)=>{
      return tot + c.stars
    }, 0)
    let averageRating = sumRatings / data.place.comments.length
    rating = (
      <h3>
        {averageRating} stars
      </h3>
    )
    comments = data.place.comments.map(c => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }
  return (
      <Def>
        <main>
          <div className="row">
            ...
          </div>
          <hr />
          <h2>Comments</h2>
        
          {rating}
        </main>
      </Def>
  )
}

module.exports = show
