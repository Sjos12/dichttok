<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //

        $user = new User();
        $user->name = 'Denzel Stellingwerf';
        $user->email = 'denzelstellingwerf@outlook.com';
        $user->password = Hash::make('Sowhat12');
        $user->save();
        
    }
}
