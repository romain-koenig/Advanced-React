import Link from 'next/link';

// Stateless component
const Sell = props => (
    <div>
        <p>Sell!</p>
        <Link href="/">
        <a>Go back to home</a></Link>
    </div>
)

export default Sell;