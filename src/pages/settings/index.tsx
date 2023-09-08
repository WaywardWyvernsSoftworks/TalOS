import { getStorageValue, setStorageValue } from "@/api/dbapi";
import { 
    getDefaultUpscaler, getEmbeddings, 
    getLoras, getModels, 
    getSDAPIUrl, getUpscalers, 
    setDefaultUpscaler, setSDAPIUrl, 
    getDefaultSteps, setDefaultSteps, 
    getDefaultCfg, setDefaultCfg,
    getDefaultWidth, setDefaultWidth,
    getDefaultHeight, setDefaultHeight,
    getDefaultHighresSteps, setDefaultHighresSteps,
    getDefaultDenoisingStrength, setDefaultDenoisingStrength } from "@/api/sdapi";
import Accordian from "@/components/accordian";
import LLMPanel from "@/components/llm-panel";
import { defaultThemes } from "@/constants";
import { useEffect, useState } from "react";

const SettingsPage = () => {
    const [currentTheme, setCurrentTheme] = useState<string>("");
    const [sdURL, setSDURL] = useState<string>("");
    const [defaultUpscaler, setUpscaler] = useState<string>("");
    const [loras, setLoras] = useState<any[]>([]);
    const [embeddings, setEmbeddings] = useState<any[]>([]);
    const [models, setModels] = useState<any[]>([]);
    const [upscalers, setUpscalers] = useState<any[]>([]);
    const [defaultSteps, setDefaultStepsState] = useState<number>(0);
    const [defaultCfg, setDefaultCfgState] = useState<string>("");
    const [defaultWidth, setDefaultWidthState] = useState<number>(0);
    const [defaultHeight, setDefaultHeightState] = useState<number>(0);
    const [defaultHighresSteps, setDefaultHighresStepsState] = useState<number>(0);
    const [defaultDenoisingStrength, setDefaultDenoisingStrengthState] = useState<number>(0);

    const setTheme = async (themeID: string) => {
        await setStorageValue("uiTheme", themeID);
        window.location.reload();
    };

    const setSDAPI = async (url: string) => {
        setSDAPIUrl(url);
    };

    useEffect(() => {
        const getTheme = async () => {
            const theme = await getStorageValue("uiTheme");
            setCurrentTheme(theme);
        };
        const getURL = async () => {
            const url = await getSDAPIUrl();
            setSDURL(url);
        }
        getTheme();
        getURL();
        fetchStableDiffusionOptions();
    }, []);

    const fetchStableDiffusionOptions = async () => {
        getDefaultUpscaler().then((result) => {
            setUpscaler(result);
        }).catch((err) => {
            console.error(err);
        });

        getLoras().then((result) => {
            setLoras(result);
        }).catch((err) => {
            console.error(err);
        });

        getEmbeddings().then((result) => {
            setEmbeddings(result);
        }).catch((err) => {
            console.error(err);
        });

        getModels().then((result) => {
            setModels(result);
        }).catch((err) => {
            console.error(err);
        });

        getUpscalers().then((result) => {
            setUpscalers(result);
        }).catch((err) => {
            console.error(err);
        });
        getDefaultSteps().then(setDefaultStepsState).catch(console.error);
        getDefaultCfg().then(setDefaultCfgState).catch(console.error);
        getDefaultWidth().then(setDefaultWidthState).catch(console.error);
        getDefaultHeight().then(setDefaultHeightState).catch(console.error);
        getDefaultHighresSteps().then(setDefaultHighresStepsState).catch(console.error);
        getDefaultDenoisingStrength().then(setDefaultDenoisingStrengthState).catch(console.error);
    };

    return (
        <div className="w-full h-[calc(100vh-70px)] flex flex-col gap-4 themed-root overflow-y-auto overflow-x-hidden">
            <h2 className="text-2xl font-bold text-theme-text text-shadow-xl">Settings</h2>
            <div className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-1 flex flex-col gap-4">
                        <Accordian title="LLM">
                            <LLMPanel />
                        </Accordian>
                        <Accordian title="Stable Diffusion API">
                            <div className="grid grid-cols-2 w-full gap-2">
                                <div className="col-span-1 flex flex-col text-left gap-1">
                                    <label htmlFor="sdapi-url" className="text-theme-text font-semibold">URL</label>
                                    <i>Note: Enable the API flag inside of Automatic1111 and enter your URL here.</i>
                                    <input type="text" id="sdapi-url" value={sdURL} className="themed-input" onChange={(e) => setSDURL(e.target.value)}/>
                                    <button className="themed-button-pos" onClick={() => setSDAPI(sdURL)}>Save</button>
                                </div>
                                <div className="col-span-1 flex flex-col text-left gap-1">
                                    <label htmlFor="default-upscaler" className="text-theme-text font-semibold">Default Upscaler</label>
                                    <select id="default-upscaler" value={defaultUpscaler} className="themed-input" onChange={(e) => setUpscaler(e.target.value)}>
                                        {upscalers.map((upscaler, index) => {
                                            return (
                                                <option key={index} value={upscaler.name}>{upscaler.name}</option>
                                            );
                                        })}
                                    </select>
                                    <button className="themed-button-pos" onClick={() => setDefaultUpscaler(defaultUpscaler)}>Save</button>
                                </div>
                                <div className="col-span-1 flex flex-col text-left gap-1">
                                    <label htmlFor="default-steps" className="text-theme-text font-semibold">Default Steps</label>
                                    <input type="number" id="default-steps" value={defaultSteps} className="themed-input" onChange={(e) => setDefaultStepsState(Number(e.target.value))}/>
                                    <button className="themed-button-pos" onClick={() => setDefaultSteps(defaultSteps)}>Save</button>
                                </div>

                                <div className="col-span-1 flex flex-col text-left gap-1">
                                    <label htmlFor="default-cfg" className="text-theme-text font-semibold">Default Cfg Scale</label>
                                    <input type="text" id="default-cfg" value={defaultCfg} className="themed-input" onChange={(e) => setDefaultCfgState(e.target.value)}/>
                                    <button className="themed-button-pos" onClick={() => setDefaultCfg(defaultCfg)}>Save</button>
                                </div>

                                <div className="col-span-1 flex flex-col text-left gap-1">
                                    <label htmlFor="default-width" className="text-theme-text font-semibold">Default Width</label>
                                    <input type="number" id="default-width" value={defaultWidth} className="themed-input" onChange={(e) => setDefaultWidthState(Number(e.target.value))}/>
                                    <button className="themed-button-pos" onClick={() => setDefaultWidth(defaultWidth)}>Save</button>
                                </div>

                                <div className="col-span-1 flex flex-col text-left gap-1">
                                    <label htmlFor="default-height" className="text-theme-text font-semibold">Default Height</label>
                                    <input type="number" id="default-height" value={defaultHeight} className="themed-input" onChange={(e) => setDefaultHeightState(Number(e.target.value))}/>
                                    <button className="themed-button-pos" onClick={() => setDefaultHeight(defaultHeight)}>Save</button>
                                </div>

                                <div className="col-span-1 flex flex-col text-left gap-1">
                                    <label htmlFor="default-highres-steps" className="text-theme-text font-semibold">Default High-Res Steps</label>
                                    <input type="number" id="default-highres-steps" value={defaultHighresSteps} className="themed-input" onChange={(e) => setDefaultHighresStepsState(Number(e.target.value))}/>
                                    <button className="themed-button-pos" onClick={() => setDefaultHighresSteps(defaultHighresSteps)}>Save</button>
                                </div>

                                <div className="col-span-1 flex flex-col text-left gap-1">
                                    <label htmlFor="default-denoising-strength" className="text-theme-text font-semibold">Default Denoising Strength</label>
                                    <input type="number" id="default-denoising-strength" value={defaultDenoisingStrength} className="themed-input" onChange={(e) => setDefaultDenoisingStrengthState(Number(e.target.value))}/>
                                    <button className="themed-button-pos" onClick={() => setDefaultDenoisingStrength(defaultDenoisingStrength)}>Save</button>
                                </div>
                            </div>
                        </Accordian>
                    </div>
                    <div className="col-span-1">
                        <Accordian title="Theme">
                        <div className="flex flex-col">
                            <div className="grid grid-cols-2 gap-2">
                                {Array.isArray(defaultThemes) && defaultThemes.map((theme, index) => {
                                    return (
                                        <button key={index} onClick={() => setTheme(theme._id)} className="themed-button-pos">
                                            {theme.name}
                                            {currentTheme === theme._id && <span className="text-theme-text"> (Current)</span>}
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                        </Accordian>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SettingsPage;