import Headding from "../Headding"

export default function Main(props) {
    return (
        <>
            <main className="mt-16">
                <Headding title={props.title} showButtonNew={props.showButtonNew} />
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        {props.children}
                    </div>
                </div>
            </main>
        </>
    )
}