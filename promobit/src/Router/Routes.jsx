export const Routes = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path={"/admin/trips/list"} element={<AdminHomePage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
};