import { Lrc, LrcLine } from '@mebtte/react-lrc';
import React from 'react';

// use hook here
const Lyric = ({ music, currentTime }) => {
    return (
        <div class="lyric">
            <Lrc
                lrc={music.lrc}
                currentTime={currentTime * 1000}
            >
                {(line, active) => (
                    <LrcLine
                        key={line.millisecond}
                        style={{
                            textAlign: 'center',
                            padding: 8,
                            fontSize: 15,
                            color: active ? '#912E15' : '#8F7C77',
                        }}
                    >
                        {line.content}
                    </LrcLine>
                )}
            </Lrc>
        </div>
    );
}

export default Lyric;
