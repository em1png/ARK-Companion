import Title from "@/components/shared/Title";

const ItemsDyes = () => {
    interface ITestColors {
        [key: string]: { name: string, color: string }
    }

    const testColors: ITestColors = {
        brick: {
            name: 'Brick',
            color: '#994326'
        },
        edocha: {
            name: 'Edocha',
            color: '#A65353'
        },
        incense: {
            name: 'Incense',
            color: '#D98D8D'
        },
        salmon: {
            name: 'Salmon',
            color: '#D9B38D'
        },
        tulip: {
            name: 'Tulip',
            color: '#FF7373'
        },
        red: {
            name: 'Red',
            color: '#FF0000'
        },
        gore: {
            name: 'Gore',
            color: '#B30000'
        },
        scab: {
            name: 'Scab',
            color: '#660000'
        },
        burn: {
            name: 'Burn',
            color: '#330000'
        },
        tangerine: {
            name: 'Tangerine',
            color: '#A67C53',
        },
        dirt: {
            name: 'Dirt',
            color: '#A67C53',
        },
        latte: {
            name: 'Latte',
            color: '#D9B38D',
        },
        peach: {
            name: 'Peach',
            color: '#FFDFBF',
        },
        cantaloupe: {
            name: 'Cantaloupe',
            color: '#FFB973',
        },
        orange: {
            name: 'Orange',
            color: '#FF7F00',
        },
        windsor: {
            name: 'Windsor',
            color: '#B35900',
        },
        terracotta: {
            name: 'Terracotta',
            color: '#663300',
        },
        bronze: {
            name: 'Bronze',
            color: '#331900',
        },
    };

    return (
        <section className='container mb-10'>
            <Title title='Dyes List'> Dyes List </Title>

            <div className='frame-rounded'>
                <div className='w-full grid grid-rows-9 grid-cols-9 grid-flow-col rounded-md overflow-hidden'>
                    {Object.keys(testColors).map((color) =>
                        <button className="h-10" style={{ backgroundColor: testColors[color].color }}>
                            <p className='small-semibold text-center'>{testColors[color].name}</p>
                        </button>
                    )}
                </div>
            </div>
        </section>
    )
}

export default ItemsDyes