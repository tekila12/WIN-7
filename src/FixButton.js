import React, { useState } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import {Button} from'@material-ui/core'

const FixButton = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleClick = () => {
        setIsLoading(true);
        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                const next = prevProgress + 10;
                if (next === 100) {
                    clearInterval(interval);
                    setIsLoading(false);
                    setHasLoaded(true);
                }
                return next;
            });
        }, 800);
    };

    if (!isLoading && !hasLoaded) {
        return (
            <div className="esetNod__info">
                <h3>EsetNod has found 32 issues in your system</h3>
                <h4>Click on to the Cleanup button to fix issues</h4>
                <Button onClick={handleClick} className="fix__Button">
                    Cleanup your Pc
                </Button>
            </div>
        );
    } else if (isLoading && !hasLoaded) {
        return (
            <div>
                <h3>Eset Nod is cleaning your Pc</h3>
                <LinearProgress value={progress} />
            </div>
        );
    } else {
        return (
            <div>
                <h3>Eset Nod has cleaned up you Pc</h3>
            </div>
        );
    }
};

export default FixButton;