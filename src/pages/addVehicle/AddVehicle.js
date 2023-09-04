import React from 'react'
import { Header } from '../../components/header/header'
import styles from './addVehicle.module.css'
import { CusAutoComplete } from '../../components/common/autocomplete/custom_autocomplete'
import { CheckBox } from '@mui/icons-material'
import { TextField } from '@mui/material'


const AddVehicle = () => {
    const vehicleOptions = [
        { title: "Personal", id: 0 },
        { title: "Bike", id: 1 },
        { title: "Cars", id: 2 },
        { title: "Truck", id: 3 },
    ];

    const InputWithLabel = ({ label, width = '100%' }) => {
        return <div style={{ width, marginTop: '1rem' }}>
            <p>{label}</p>
            <TextField id="filled-basic" label="eg. 1FTPWAPSS55sL3A" variant="filled" style={{ width: '100%', marginTop: '5px' }} />
        </div>
    }

    const DropdownWithLabel = ({ label, width = '100%' }) => {
        return <div style={{ width, marginBottom: '1rem' }}>
            <p>{label}</p>
            <CusAutoComplete
                options={vehicleOptions}
                sx={{ background: "#EBECEF", mt: "5px", width: "100%" }}
            />
        </div>
    }

    const OptionSelector = ({ label, option1, option2 }) => {
        return <div className={styles["single-select-row"]}>
            <p>{label}</p>
            <div>
                <button className={styles['single-select-btn']}>{option1}</button>
                <button className={styles['single-select-btn']}>{option2}</button>
            </div>
        </div>
    }

    return (
        <>
            <Header />
            <div className={styles['page']}>
                <div className={styles['form']}>
                    <h1>Create An ad</h1>
                    <CusAutoComplete
                        options={vehicleOptions}
                        label={'Personal'}
                        // label={"Vehicle Type"}
                        label2={""}
                        sx={{ background: "#EBECEF", mt: "0.2vh", width: "100%" }}
                    />

                    {/* Vehicle Data */}
                    <div>
                        <h3>Vehicle Data</h3>
                        <h4>Main features</h4>

                        <OptionSelector label={'Damaged'} option1={'No'} option2={'Yes'} />
                        <OptionSelector label={'Imported*'} option1={'No'} option2={'Yes'} />

                        <h4>Basic Information</h4>
                        <div className={styles['dropdowns']}>
                            <InputWithLabel label={'VIN*'} width='49%' />
                            <InputWithLabel label={'Mileage*'} width='49%' />
                            <InputWithLabel label={'Vehicle Registeration Number'} width='49%' />
                            <InputWithLabel label={'Date of first registration in vehicle history'} width='49%' />
                        </div>


                        <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center' }}>
                            <CheckBox
                                sx={{ '& .MuiSvgIcon-root': { fontSize: 50 }, color: 'blue', fontSize: 30 }}
                                style={{ marginRight: '1.5rem' }}
                                checked={false}
                            />
                            <p>
                                Do not show the registration number in <br /> the advertisement
                            </p>
                        </div>

                        <h4>Technical Data</h4>
                        <div className={styles['dropdowns']}>
                            <DropdownWithLabel label={'Production Year*'} width='49%' />
                            <DropdownWithLabel label={'Vehicle Make*'} width='49%' />
                            <DropdownWithLabel label={'Vehicle Model*'} width='49%' />
                            <DropdownWithLabel label={'Fuel Type*'} width='49%' />
                            <DropdownWithLabel label={'Power*'} width='49%' />
                            <DropdownWithLabel label={'Jump Capacity*'} width='49%' />
                            <DropdownWithLabel label={'Number of Doors*'} width='49%' />
                            <DropdownWithLabel label={'Gearbox'} width='49%' />
                            <DropdownWithLabel label={'Version'} width='49%' />
                            <DropdownWithLabel label={'Generation'} width='49%' />
                            <DropdownWithLabel label={'Body Type'} width='49%' />
                            <DropdownWithLabel label={'Colour'} width='49%' />
                        </div>
                    </div>

                    {/* Pictures */}
                    <h3>Pictures</h3>
                    <div className={styles["add-photos-container"]}>
                        <div style={{ display: 'flex', alignItems: 'center', columnGap: '1rem' }}>
                            <button
                                className={styles["add-photos-btn"]}
                                onClick={() => { }}
                            >
                                Add Photos
                            </button>
                            <p>or drop files here</p>
                        </div>
                        <p>Add up to 40 photos in jpg, png or gif formats.</p>
                    </div>

                    <InputWithLabel label={'YouTube Video'} placeholder="https://www.youtube.com/watch?v=kJvl7GjjkI0" />

                    {/* Pictures */}
                    <h3>Vehicle Description</h3>
                    <InputWithLabel label={'Title of announcement'} placeholder="Eg. Owner, perfect condition, new battery" />
                    <div style={{ marginTop: '1rem' }}>
                        <p>Description</p>
                        <TextField
                            id="filled-multiline"
                            multiline
                            rows={10}
                            style={{ width: '100%', marginTop: '5px' }}
                            variant='filled'
                        />
                        <p style={{ float: 'right', marginTop: '5px', fontSize: '1rem', color: 'gray' }}>0/2000</p>
                    </div>

                    {/* Price */}
                    <h3>Price</h3>
                    <OptionSelector label={'Net Price'} option1={'Gross'} option2={'Net'} />

                    {/* Seller Details */}
                    <h3>Seller Details</h3>
                    <div className={styles['dropdowns']}>
                        <InputWithLabel label={'Your Name'} placeholder="" width='49%' />
                        <InputWithLabel label={'Enter City Or Code'} placeholder="" width='49%' />
                        <InputWithLabel label={'Phone Number'} placeholder="" width='49%' />
                    </div>

                    <div className={styles["checkbox-blue-container"]}>
                        <CheckBox
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 50 }, color: 'blue', fontSize: 30 }}
                            style={{ marginRight: '1.5rem' }}
                            checked={false}
                        />
                        <p>I want to use the free "Data verification Ads" functionality".</p>
                    </div>
                    <p style={{ marginTop: '1rem', color: 'blue', textDecoration: 'underline' }}>Learn more about this topic</p>
                </div>
            </div>
        </>
    )
}

export default AddVehicle
