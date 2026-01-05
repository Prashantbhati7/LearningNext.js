

function Footer() {
  return (
    <div className="h-90 bg-gray-600 flex w-full">
        <div className="left h-full w-1/2"> Left Of footer </div>
        <div className="right h-full w-1/2  ">
            <div className="upper text-center h-1/2 w-full"> Upper </div>
            <div className="down text-center h-1/2 w-full "> Lower </div>
        </div>
    </div>
  )
}

export default Footer
