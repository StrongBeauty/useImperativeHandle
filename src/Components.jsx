import React, {forwardRef, useImperativeHandle, useRef, useState} from "react";

export const Parent = () => {

    const children = useRef()

    const click = () => {
        children.current.show()
    }

    return (
        <div>
            <input type='button'  onClick={click} value='How mach? - parent'/>
            <Child ref={children} />
        </div>
    )
}


const Child = forwardRef((props, ref) => {
    const [count, setCount] = useState(0);

    useImperativeHandle(ref, () => ({
        show: () => alert(count)
    }));

    const increment = () => {
        setCount(count + 1)
    }

    return (
        <>
            <input type='button' value='Count - child' onClick={increment}/>
            <div>count: {count}</div>
        </>
    )
})
