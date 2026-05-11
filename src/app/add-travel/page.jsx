import AddTravelButton from "@/components/clientComponents/AddTravelButton";
import { addtravelDataAction } from "@/serverAction/addtravelDataAction";
import {
  FieldError,
  Input,
  Label,
  ListBox,
  TextField,
  Select,
  TextArea,
  Button,
} from "@heroui/react";
import React from "react";

const AddTravel = () => {
   
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-white py-10 px-5">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden border border-cyan-100">
        
        <div className="bg-cyan-500 text-white p-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Add New Travel Package
          </h2>

          <p className="text-sm mt-2 text-cyan-100">
            Create and manage amazing travel experiences
          </p>
        </div>

        <form className="p-6 md:p-10 space-y-8" action={addtravelDataAction}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="md:col-span-2">
              <TextField name="destinationName" isRequired>
                <Label className="mb-2 text-gray-700 font-medium">
                  Destination Name
                </Label>

                <Input
                  placeholder="Bali Paradise"
                  className="rounded-2xl h-14 border border-gray-200"
                />

                <FieldError />
              </TextField>
            </div>

            <TextField name="country" isRequired>
              <Label className="mb-2 text-gray-700 font-medium">
                Country
              </Label>

              <Input
                placeholder="Bangladesh"
                className="rounded-2xl h-14 border border-gray-200"
              />

              <FieldError />
            </TextField>

            <div>
              <Select
                name="category"
                isRequired
                className="w-full"
                placeholder="Select category"
              >
                <Label className="mb-2 text-gray-700 font-medium">
                  Category
                </Label>

                <Select.Trigger className="rounded-2xl h-14 border border-gray-200">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>

                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="Beach" textValue="Beach">
                      Beach
                      <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item id="Mountain" textValue="Mountain">
                      Mountain
                      <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item id="City" textValue="City">
                      City
                      <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item id="Adventure" textValue="Adventure">
                      Adventure
                      <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item id="Cultural" textValue="Cultural">
                      Cultural
                      <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item id="Luxury" textValue="Luxury">
                      Luxury
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            <TextField name="price" type="number" isRequired>
              <Label className="mb-2 text-gray-700 font-medium">
                Price (USD)
              </Label>

              <Input
                type="number"
                placeholder="1299"
                className="rounded-2xl h-14 border border-gray-200"
              />

              <FieldError />
            </TextField>

            <TextField name="duration" isRequired>
              <Label className="mb-2 text-gray-700 font-medium">
                Duration
              </Label>

              <Input
                placeholder="7 Days / 6 Nights"
                className="rounded-2xl h-14 border border-gray-200"
              />

              <FieldError />
            </TextField>

            <div className="md:col-span-2">
              <TextField name="departureDate" type="date" isRequired>
                <Label className="mb-2 text-gray-700 font-medium">
                  Departure Date
                </Label>

                <Input
                  type="date"
                  className="rounded-2xl h-14 border border-gray-200"
                />

                <FieldError />
              </TextField>
            </div>

            <div className="md:col-span-2">
              <TextField name="imageUrl" isRequired>
                <Label className="mb-2 text-gray-700 font-medium">
                  Image URL
                </Label>

                <Input
                  type="url"
                  placeholder="https://example.com/bali-paradise.jpg"
                  className="rounded-2xl h-14 border border-gray-200"
                />

                <FieldError />
              </TextField>
            </div>

            <div className="md:col-span-2">
              <TextField name="description" isRequired>
                <Label className="mb-2 text-gray-700 font-medium">
                  Description
                </Label>

                <TextArea
                  placeholder="Describe the travel experience..."
                  className="rounded-3xl border border-gray-200 min-h-[140px]"
                />

                <FieldError />
              </TextField>
            </div>
          </div>

          <AddTravelButton/>
        </form>
      </div>
    </div>
  );
};

export default AddTravel;