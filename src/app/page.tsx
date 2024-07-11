import {
    BrowserCategories,
    DiscoverNFT,
    HomeFooter,
    HomeHeading,
    TopCreator,
    TredingCollection,
    Usermanual,
    Mashroom,
    // ContactButton,
    // BurgerButton,
} from "@/components"
import { Suspense } from "react"
export default function Page() {
    return (
        <main>
            <Suspense fallback={<div>...</div>}>
                <HomeHeading />
                <TredingCollection />
                <TopCreator />
                <BrowserCategories />
                <DiscoverNFT />
                <Mashroom />
                <Usermanual />
                <HomeFooter />
                {/* <BurgerButton />
                <ContactButton /> */}
            </Suspense>
        </main>
    )
}
