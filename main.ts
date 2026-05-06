//% color="#2659ff" icon="\uf110" block="Smoothing"
namespace smoothing {
    export class Smoother {
        private memory: number = 0;
        public alpha: number = 0.2;

        constructor(responsiveness: number) {
            this.alpha = responsiveness / 100;
        }

        /**
         * Feed a new value and get the smoothed result.
         */
        //% blockInner.showVariable="smoother"
        //% block="smooth %this value %current"
        public step(current: number): number {
            this.memory = (current * this.alpha) + (this.memory * (1 - this.alpha));
            return Math.round(this.memory);
        }
    }

    /**
     * Create a new smoothing object for a specific sensor.
     */
    //% block="create smoother with responsiveness %responsiveness"
    //% blockSetVariable=mySmoother
    //% responsiveness.defl=20
    export function createSmoother(responsiveness: number): Smoother {
        return new Smoother(responsiveness);
    }
}