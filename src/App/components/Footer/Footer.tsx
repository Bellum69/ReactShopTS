export const Footer = () => {
return (
    <footer className='page-footer green lighten-4'>
        <div className='footer-copyright'>
            <div className='container'>
                © {new Date().getFullYear()} Copyright Text
                <a
                    className='grey-text text-lighten-4 right'
                    href='https://github.com/Bellum69/TS-React-Shop'
                    rel='noreferrer'
                    target='_blank'
                >
                    Repo
                </a>
            </div>
        </div>
    </footer>
);
}