const App = {
    needToCapture : false,

    yak : {
        startX : 200,
        startY : 100,
        endX : 450,
        endY : 450,

        /// Contains the set of points making up the path
        /// which defines the region we want to shave
        capturedPoints : [],

        /// An array of [xmin, xmax] entries
        /// to define the x coordinates of the
        /// region we want to shave. These are relative
        /// coordinates, starting from startX.
        /// The array has (endY - startY) entries,
        /// so the indices are relative y coordinates.
        bounds : [],

        /// Returns true if [x,y] is inside the Yak
        pointInsideYak : function (x, y) {
            if (x < this.startX)
            {
                return false;
            }

            if (x > this.endX)
            {
                return false;
            }

            if (y < this.startY)
            {
                return false;
            }

            if (y > this.endY)
            {
                return false;
            }

            // Perhaps we shouldn't need this check
            if (y - this.startY > this.bounds.length - 1)
            {
                return false;
            }

            if (x - this.startX < this.bounds [ y - this.startY ][0])
            {
                return false;
            }

            if (x - this.startX > this.bounds [ y - this.startY ][1])
            {
                return false;
            }

            return true;
        },

        shave : function (context, x, y) {
            if (!this.pointInsideYak (x,y))
            {
                return;
            }

            let region = new Path2D()
            region.moveTo(x, y)
            region.lineTo(x+4,y)
            region.lineTo(x+4,y+4)
            region.lineTo(x,y+4)
            region.lineTo(x,y)

            context.fillStyle = "#beaa96"
            context.fill (region)
        },

        capture : function (context, x,y) {
            this.capturedPoints.push ([x,y])

            let region = new Path2D()
            region.moveTo(x, y)
            region.lineTo(x+2,y)
            region.lineTo(x+2,y+2)
            region.lineTo(x,y+2)
            region.lineTo(x,y)

            context.fillStyle = "#000000"
            context.fill (region)
        },

        finish_capturing : function () {
            var maxRelativeY = 0;
            this.capturedPoints.forEach ( (pair) => {
                let relativeY = pair[1] - this.startY;
                if (relativeY > maxRelativeY)
                {
                    maxRelativeY = relativeY;
                }
            })

            this.bounds = [];
            for (var i = 0; i < maxRelativeY+1; i++)
            {
                this.bounds.push ([this.endX - this.startX,0])
            }

            this.capturedPoints.forEach ( (pair) => {
                let relativeX = pair[0] - this.startX;
                let relativeY = pair[1] - this.startY;

                if (relativeX < this.bounds[relativeY][0])
                {
                    this.bounds[relativeY][0] = relativeX;
                }
                if (relativeX > this.bounds[relativeY][1])
                {
                    this.bounds[relativeY][1] = relativeX;
                }
            })
            this.capturedPoints = [];
        }
    },

    setup : function () {
        const theCanvas = document.getElementById ("theCanvas")
        const context = theCanvas.getContext ("2d")

        document.getElementById("theStartButton").addEventListener ("click", () => App.restoreImage (context))

        var isShaving = false;
        var isCapturing = false;
        theCanvas.addEventListener ("mousedown", (e) =>
        {
            if (this.needToCapture)
            {
                isCapturing = true;
            }
            else
            {
                isShaving = true;
            }
        })

        theCanvas.addEventListener ("mouseup", (e) =>
        {
            if (this.needToCapture)
            {
                isCapturing = false;
                this.yak.finish_capturing ();
                this.needToCapture = false;
                document.getElementById("theStatusBar").innerText = "Keep shaving using your mouse";
            }
            else
            {
                isShaving = false;
            }
        })

        theCanvas.addEventListener ("mousemove", (e) =>
        {
            if (isShaving)
            {
                this.yak.shave (context, e.offsetX, e.offsetY)
            }
            else if (isCapturing)
            {
                this.yak.capture (context, e.offsetX, e.offsetY)
            }
        })

        this.restoreImage (context)
    },

    restoreImage : function (context)
    {
        const theImg = document.getElementById ("theImg")
        context.drawImage (theImg,0,0,640,480)
        this.needToCapture = true;
        document.getElementById("theStatusBar").innerText = "Trace the area you want to shave using your mouse";
    }
};

document.addEventListener ("DOMContentLoaded", () => {
    App.setup ()
})
