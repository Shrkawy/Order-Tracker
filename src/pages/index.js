import StepNavigation from "../components/StepNavigation/stepNavigation";
import {ProcessNav} from "../components/StepNavigation/NavigatorButtons";
import NavigationButtons from "../services/APIPosts/UpdatePOSOrder";
import FooterBar from "../components/footer";
import React, {useState} from "react";
import GetPOSOrder from "../services/APIGets/GetPOSOrder";
import {FileUploadTitle, FUDropBox, LearnMoreBar, MerchantInfo, SpecialProgramming, UploadedFiles} from "../components";
import TaxPayment from "../components/taxPayment/TaxPayment";
import EquipInstall from "../components/equipmentInstallation/EquipmentInstallation";
import ThankYouPage from "../components/thankYouPage/ThankYou";

const Home = props => {

    function RunAPI() {
        return <GetPOSOrder/>;
    }

    // function Auth() {
    //     let {id} = useParams();
    //     return ({id});
    // }
    //
    // function updatePOSOrder() {
    // }

    const labelArray = [
        "Merchant Information",
        "Taxes & Payment",
        "Menu & File Upload",
        "Equipment and Installation",
    ];
    const [currentStep, updateCurrentStep] = useState(1);
    //
    const [page, setPage] = useState(1);

    const nextText = "Next Page";
    const submitText = "Submit POS Order Confirmation";
    const doneText = "Done";

    function updateStep(step) {
        if (step < 1) return;
        if (step > 5) return;
        updateCurrentStep(step);
        goNextPage(step);
    }

    function updateButtons() {
    }

    function goNextPage(newPage) {
        setPage((page) => newPage);
        updateButtons();
    }

    function ShowPageOne() {
        return <MerchantInfo/>;
    }

    function ShowPageTwo() {
        return <TaxPayment/>;
    }

    function ShowPageThree() {
        return (
            <div className="maincontent_flex">
                <FileUploadTitle/>
                <div className="uf_grid">
                    <FUDropBox/>
                    <UploadedFiles/>
                </div>
                <div className="mobile_learnmorebar">
                    <LearnMoreBar/>
                </div>
                <SpecialProgramming/>
            </div>
        );
    }

    function ShowPageFour() {
        return <EquipInstall/>;
    }

    function ShowPageFive() {
        return <ThankYouPage/>;
    }

    return (
        <>
            <RunAPI/>
            {page !== 5 && (
                <StepNavigation
                    labelArray={labelArray}
                    currentStep={currentStep}
                    updateStep={updateStep}
                />
            )}

            {/* Page Components Start Here */}

            {page === 1 && <ShowPageOne/>}
            {page === 2 && <ShowPageTwo/>}
            {page === 3 && <ShowPageThree/>}
            {page === 4 && <ShowPageFour/>}
            {page === 5 && <ShowPageFive/>}

            {/* Page Components End Here */}

            {page <= 5 && (
                <ProcessNav onLoad={() => updateButtons()}>
                    <NavigationButtons
                        updateStep={updateStep}
                        currentStep={currentStep}
                        nextText={nextText}
                        submitText={submitText}
                        doneText={doneText}
                    />
                </ProcessNav>
            )}

            {page !== 5 && <FooterBar/>}
        </>
    )
}

export default Home;