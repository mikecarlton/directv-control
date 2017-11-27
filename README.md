
# directv-control
*Web browser control of DirecTV set top boxes*

This simple project was motivated by the needs of a friend and neighbor --
Henry Evans ([r4h.org](http://r4h.org))

Henry is a mute quadraplegic whose primary means of control (and communication)
is via a computer where he can move the mouse via eye tracking and click a
mouse.

In a conversation it came out that he would like to be able to control the TV
from his computer (instead of being reliant on someone to do it for him).
Actually, we had tried to set up something like this a few years ago, but with
an older set top box, and I wasn't able to find a way to do it at the time.

This time they have more modern set top box and I was able to find some
documentation on controlling the set top box via HTTP commands (a copy is
included in this repository).

The result is a simple web page that sends HTTP commands to control a DirecTV
set top box located on your local subnet.  It is designed with simple, large
(easy to target) buttons allow you to send almost any command the remote can.

## Setup

Clone this repo (or just copy the files) into a directory on your local
computer.

You'll need the IP address of your set top box, you can find this in Settings.
I suggest you edit ``directv.html`` and save it there so you do not have to
reenter it each time you load the file.  I'd also suggest you configure your
router to give your set top box a static IP assignment so it does not change.

**Important**  You must enable remote control of your set top box for this to
work; by default it is disabled.  See section 2.3 of the enclosed manual for
details.

On Henry's box it was at ``Menu -> System Setup -> Whole-Home``; set “External
Access" to “Allow”.  There are probably other options as well, you can choose
to allow them if you want.

### Supported Models
We've only tried this on one set top box model: *HR24/200*, with software
version *0xb08*.  According the manual, which is dated 2010, it should work
with HD receiver models H21, HR20 and newer.

### Limitations
This does not let you control the TV itself (only the set top box).  As such,
you cannot adjust the volume or turn the TV on or off.  This is unfortunate,
but still quite valuable without this ability.

I suspect it might be possible to do so via HDMI-CEC, but I haven't found the
necessary documentation.  It would also require the appropriate support from
the TV.  Any leads would be greatly appreciated.

## Usage
After copying the files, just open the ``directv.html`` file in a browser. Set
the IP address of your set top box (if not already saved in the file) and
you're good to go.

## Customization

The web page is very simple by design and should be easy to modify.  Open the
file ```directv.html`` in a text editor, make any changes you like, save it and
reload in your browser.

### Adding / Removing Keys From the Remote
Simply edit the array ``remote``, using the values from table 3-10 in the
included documentation.  E.g., to add a button which sends a press of the green
button, just add this line.  The value for *command* comes from the table, the
label is what is displayed in the browser.

```
{ command: 'green',   label: 'Green',   row: 1, column: 1 },
```
The row and column entries determine where the button is displayed on the screen.

Be very careful with typos and if the page doesn't load or doesn't work, check
for things like a missing comma at the end of each line or a unmatched quote.

### Adding / Removing Channel Buttons
To add buttons which go to a specific channel, edit the array ``channels``.
E.g., to add a button to go to HBO on channel 501, add a line like this.

```
{ name: 'HBO', channel: 501 },
```

To change the number of colums of channel buttons (4 by default in the included layout), edit the line like this to have as many `max-content` entries as you would like columns of channel buttons.

```
grid-template-columns: max-content max-content max-content max-content;
```
