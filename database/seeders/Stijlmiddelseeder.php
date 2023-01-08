<?php

namespace Database\Seeders;

use App\Models\Stijlmiddel;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class Stijlmiddelseeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $stijlmiddelen = [];
        $row = 1;
        if (($handle = fopen('stijlmiddelen.csv', "r", true)) !== FALSE) {
            while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
                $num = count($data);
                $row++;
                if ($data[0] == '' || $data[1] == '' || $data[2] == '') continue;
                $stijlmiddelen[] = [
                    'name' => $data[0],
                    'description' => $data[1],
                    'color' => $data[2],
                ];
            }
            fclose($handle);
        }

        foreach ($stijlmiddelen as $stijlmiddel) {
            Stijlmiddel::create($stijlmiddel);
        }
    }
}
